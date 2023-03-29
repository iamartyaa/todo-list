const Header = ({ handleToggle }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button className="toggle" onClick={() => handleToggle((p) => !p)}>Toggle Mode</button>
        </div>
    );
}

export default Header;