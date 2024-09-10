import { Component } from "react";
import { connect } from "react-redux";
import ConnectedClassTodoForm from "./ClassTodoForm";
import ConnectedClassTodoItem from "./ClassTodoItem";

class ClassTodoMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;

    return (
      <div className='min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage Your Tasks
          </h1>
          <div className='mb-4'>
            <ConnectedClassTodoForm />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {
              /*Loop and Add TodoItem here */
              tasks.map((x) => (
                <ConnectedClassTodoItem key={x.id} task={x} />
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
