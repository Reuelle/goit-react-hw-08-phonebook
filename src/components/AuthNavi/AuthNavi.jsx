import { Links } from './AuthNavi.module.css';

export default function AuthNav() {
  return (
    <div>
      <Links to="/registration">Registration</Links>
      <Links to="/login">Login</Links>
    </div>
  );
}
