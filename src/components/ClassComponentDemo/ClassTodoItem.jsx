import { Component } from "react";
import { todoActions } from "../../redux/reducers/action";

export default class ClassTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      message: props.task.message,
    };
  }

  render() {
    const { isCompleted, id } = this.props.task;
    const { isEditable, message } = this.state;
    const toggleCompleted = () => {
      todoActions.toggleCompleted(id);
      console.log(this.props);
    };

    const editTask = () => {
      todoActions.updateTask(id, { message, id, isCompleted });
      this.setState({ ...this.state, isEditable: !isEditable });
    };

    const deleteTask = () => {
      todoActions.deleteTask(id);
    };

    console.log({ ...this.props.task });

    return (
      <div
        className={`w-[100%] flex border
         border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
           isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
         }`}
      >
        <input
          type='checkbox'
          className='cursor-pointer'
          checked={isCompleted}
          onChange={toggleCompleted}
        />
        <input
          type='text'
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isEditable ? "border-black/10 px-2" : "border-transparent"
          } ${isCompleted ? "line-through" : ""}`}
          value={message}
          onChange={(e) =>
            this.setState({ ...this.state, message: e.target.value })
          }
          readOnly={!isEditable}
        />
        {/* Edit, Save Button */}
        <button
          className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
          onClick={() => {
            if (isCompleted) return;

            if (isEditable) {
              editTask();
            } else
              this.setState({
                ...this.state,
                isEditable: !isEditable,
              });
          }}
          disabled={isCompleted}
        >
          {this.state.isEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
          onClick={deleteTask}
        >
          ❌
        </button>
      </div>
    );
  }
}
