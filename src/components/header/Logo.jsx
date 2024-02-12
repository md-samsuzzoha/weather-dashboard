import HeaderLogo from "../../assets/logo.svg";

export default function Logo() {
    return (
        <a href="./index.html">
            <img className="h-9" src={HeaderLogo} alt="Weather App" />
        </a>
    );
}
