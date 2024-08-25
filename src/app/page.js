"use client";

import React from "react";

import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

function Home() {
    const [todos, setTodos] = React.useState([
        { title: "Some task", id: self.crypto.randomUUID(), is_completed: false },
        {
          title: "Some other task",
          id: self.crypto.randomUUID(),
          is_completed: true,
        },
        { title: "last task", id: self.crypto.randomUUID(), is_completed: false },
    ]);

    return (
        <div className="wrapper">
            <Header />
            <TODOHero todos_completed={0} total_todos={0} />
            <Form />
            <TODOList todos={[todos]} />
        </div>
    );
}

export default Home;