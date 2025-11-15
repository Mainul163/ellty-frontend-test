// components/Checkbox.tsx
type CheckboxProps = {
    checked: boolean;
    onChange: () => void;
};

export function Checkbox({ checked, onChange }: CheckboxProps) {
    return (
        <label className="checkbox">
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className="checkbox-box" />
        </label>
    );
}

