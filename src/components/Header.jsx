import srcImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={srcImg} alt="logo showing money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
