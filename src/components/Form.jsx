function Form({ setTodos }) {
    const handleSubmit = (event) => {
        // prevent the form from submitting and reloading the entire app
        event.preventDefault();

        // add new todos to state
        const value = event.target.todo.value;
        setTodos((prevTodos) => [
          ...prevTodos,
          { title: value, id: self.crypto.randomUUID(), is_completed: false },
        ]);

        // reset the form
        event.target.reset();
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your next task"
                />
            </label>
            
            <button>
                <span className="visually-hidden">Submit</span>
                <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                >
                <path
                    d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                    fillRule="nonzero"
                />
                </svg>
            </button>
        </form>
    );
}
export default Form;
