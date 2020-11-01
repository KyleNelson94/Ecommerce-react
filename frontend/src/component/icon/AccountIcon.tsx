import * as React from "react";

export class AccountIcon extends React.PureComponent {
  
  render() {
    return (
      <svg width={25} height={25} fill="none">
        <path
          d="M12.5 2.969a3.28 3.28 0 110 6.561 3.28 3.28 0 010-6.561zm0 14.062c4.64 0 9.531 2.282 9.531 3.282v1.718H2.97v-1.718c0-1 4.89-3.282 9.531-3.282zM12.5 0a6.248 6.248 0 00-6.25 6.25 6.248 6.248 0 006.25 6.25 6.248 6.248 0 006.25-6.25A6.248 6.248 0 0012.5 0zm0 14.063c-4.172 0-12.5 2.093-12.5 6.25V25h25v-4.688c0-4.156-8.328-6.25-12.5-6.25z"
          fill="#CCCCCE"
        />
      </svg>
    );
  }
}