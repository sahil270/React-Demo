import { Component } from "react";
import { todoActions } from "../../redux/reducers/action";
import { connect } from "react-redux";

class ClassTodoForm extends Component {
  state = {
    message: "",
  };

  render() {
    const { message } = this.state;
    const { addTask } = this.props;

    return (
      <form
        className='flex'
        onSubmit={(e) => {
          e.preventDefault();
          addTask({
            id: Date.now(),
            isCompleted: false,
            message: message,
          });
          this.setState({ message: "" });
        }}
      >
        <input
          type='text'
          placeholder='Write Task Name/Message...'
          className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
          value={message}
          onChange={(e) => this.setState({ message: e.target.value })}
        />
        <button
          type='submit'
          className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
        >
          Add
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(todoActions.addTask(task)),
  };
};

const ConnectedClassTodoForm = connect(null, mapDispatchToProps)(ClassTodoForm);

export default ConnectedClassTodoForm;
