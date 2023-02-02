import React from 'react';
import { classNames } from '../common';
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
  onChange: (checked: boolean, evt?: React.FormEvent<HTMLInputElement>) => void;
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
  /**
   * will alloww to specify extra properties for the input
   */
  inputProps?: any;
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
  inputProps,
}: ToggleProps) => {
  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    onChange(!checked, evt);
  };

  return (
    <label
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        filter: disabled ? 'brightness(0.9)' : 'unset',
      }}
      className={classNames([style.switch, className])}
    >
      <div
        className={classNames([
          style.switchBg,
          { [`${style.isChecked}`]: checked },
        ])}
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
        className={classNames([
          style.switchHandle,
          { [`${style.isChecked}`]: checked },
        ])}
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
        {...inputProps}
      />
    </label>
  );
};
