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
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
    );
}
export default Form;
