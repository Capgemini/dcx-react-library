import React from 'react';
import style from './toggle.module.css';

interface ToggleProps {
  /**
   * set the value to check on or off
   */
  checked: boolean;
  /**
   * color when is checked
   */
  onColor: string;
  /**
   * color when if not checked
   */
  offColor: string;
  /**
   * handle the check value
   */
  onChange: (checked: boolean) => void;
  /**
   * define your own style
   */
  className?: string;
  /**
   * the color of the handler
   */
  handleColor?: string;
  /**
   * define the style by default is 34px
   */
  borderRadius?: string;
  /**
   * disable value
   */
  disabled?: boolean;
  /**
   * specify a custom element for on state
   */
  customOnLabel?: JSX.Element;
  /**
   * specify a custom element for off state
   */
  customOffLabel?: JSX.Element;
}

export const Toggle = ({
  className,
  checked,
  onChange,
  onColor,
  offColor,
  borderRadius,
  disabled,
  customOnLabel,
  customOffLabel,
}: ToggleProps) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        filter: disabled ? 'brightness(0.9)' : 'unset',
      }}
      className={`${style.switch} ${className || ''}`}
    >
      <div
        className={`${style.switchBg} ${checked ? style.isChecked : ''}`}
        style={{
          backgroundColor: checked ? onColor : offColor,
          borderRadius: borderRadius || '34px',
        }}
        title={checked ? 'status-on' : 'status-off'}
      >
        {checked ? (
          <div title="on-label" style={{ height: '100%' }}>
            {customOnLabel}
          </div>
        ) : (
          <div
            title="off-label"
            style={{
              height: '100%',
              justifyContent: 'flex-end',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {customOffLabel}
          </div>
        )}
      </div>
      <div
        id="dragswitch-handle"
        title="dragswitch-handle"
        className={`${style.switchHandle} ${checked ? style.isChecked : ''}`}
        style={{
          WebkitTransition: 'transform .2s',
          MozTransition: 'transform .2s',
          transition: 'transform .2s',
          backgroundColor: '#ffffff',
          borderRadius: borderRadius || '50%',
        }}
      />
      <input
        role="switch"
        aria-checked={checked}
        type="checkbox"
        defaultChecked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={style.switchInput}
      />
    </label>
  );
};
