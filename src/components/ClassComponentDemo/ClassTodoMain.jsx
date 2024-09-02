import { Component } from "react";
import ClassTodoItem from "./ClassTodoItem";
import ClassTodoForm from "./ClassTodoForm";
import { connect } from "react-redux";

class ClassTodoMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage Your Tasks
          </h1>
          <div className='mb-4'>
            <ClassTodoForm />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {
              /*Loop and Add TodoItem here */
              this.props?.tasks.map((x) => (
                <ClassTodoItem key={x.id} task={x} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const ClassTodoComponent = connect(mapStateToProps)(ClassTodoMain);

export default ClassTodoComponent;
