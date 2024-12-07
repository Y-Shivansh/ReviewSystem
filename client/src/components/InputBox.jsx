const InputBox = ({ label, placeholder, value, type, onChange, name }) => {
    return (
        <div className="text-sm font-normal text-left py-2">
            <div className="font-semibold">{label}</div>
            <textarea
                name={name} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full mt-1 px-2 py-1 border bg-none outline-none rounded border-slate-200 bg-transparent"
            />
        </div>
    );
};

export default InputBox;
