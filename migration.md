# Migration Guide: Tabs Component

This document explains how to migrate your code from the old implementation of the `TabGroup`/`Tabs` component to the new version, which now manages active state internally and provides a simpler, more declarative API.

---

## Main Changes

- **Removal of imperative ref-based state control:**
  You no longer need (or are able) to manipulate the active tab using refs and imperative methods like `updateActiveTab`.
- **Active tab state is managed internally:**
  The active tab is now handled inside the component. You can still control it externally using the `activeKey` prop if needed.
- **Simpler, more declarative API:**
  Interactions are handled via standard React props and events (`onSelect`), not via refs.

---

## Before (Old Implementation)

```jsx
const ref = useRef();

<TabGroup ref={ref} onSelect={handleSelect}>
  <Tab eventKey="tab-1" label="Tab 1">
    Content 1
  </Tab>
  <Tab eventKey="tab-2" label="Tab 2">
    Content 2
  </Tab>
</TabGroup>;

// Change the active tab imperatively:
ref.current.updateActiveTab('tab-2');
```

---

## After (New Implementation)

### 1. **Controlled by Parent (optional):**

If you want to control the active tab from the parent, use the `activeKey` prop and the `onSelect` event:

```jsx
const [activeTab, setActiveTab] = useState('tab-1');

<TabGroup activeKey={activeTab} onSelect={setActiveTab}>
  <Tab eventKey="tab-1" label="Tab 1">
    Content 1
  </Tab>
  <Tab eventKey="tab-2" label="Tab 2">
    Content 2
  </Tab>
</TabGroup>;
```

### 2. **Uncontrolled (Internal State):**

If you do not pass `activeKey`, the component will manage the active tab internally:

```jsx
<TabGroup>
  <Tab eventKey="tab-1" label="Tab 1">
    Content 1
  </Tab>
  <Tab eventKey="tab-2" label="Tab 2">
    Content 2
  </Tab>
</TabGroup>
```

---

## What do you need to change in your code?

1. **Remove any use of refs to manipulate the active tab.**
2. **If you need to change the active tab from the parent, use the controlled pattern with `activeKey` and `onSelect`.**
3. **Update your tests:**
   - Do not use refs or imperative methods.
   - Simulate user interactions (clicks, keyboard) and check the visual state.

---

## Example: Migrating a Test

**Before:**

```js
// Using ref and updateActiveTab
ref.current.updateActiveTab('tab-2');
```

**After:**

```js
// Simulate a click on the desired tab
fireEvent.click(screen.getByText('Tab 2'));
```

---

## Summary

- Remove the use of refs and imperative methods.
- Use props and events to control the active tab if needed.
- Enjoy a simpler, more declarative API.

---

If you have questions, check the component documentation or open an issue.
