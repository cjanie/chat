interface Props {
    placeholder: string
}

export function TodoTextInput(props: Props) {

    function handleChange() {
        // TODO
    }

    return (
        <input
            type="text"
            placeholder={props.placeholder}
            onChange={(e) => document.title = e.target.value}
        />
    );
}