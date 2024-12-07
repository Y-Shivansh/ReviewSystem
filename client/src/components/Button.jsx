export const Button = ({ label, type, onClick }) => {
    return (
        <div>
            <button
                type={type}
                onClick={onClick} // Add onClick here
                className="w-full border hover:bg-gray-300 bg-secondaryCol hover:bg-secondaryColHover focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
            >
                {label}
            </button>
        </div>
    );
};
