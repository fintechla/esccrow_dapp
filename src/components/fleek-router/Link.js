import { navigate } from "./FleekRouter";

export function Link({ className, children, to, foreign }) {
  if (foreign) {
    return (
      <a className={className} href={to} target="_blank">
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={className}
        onClick={() => {
          navigate(to);
        }}
      >
        {children}
      </a>
    );
  }
}
