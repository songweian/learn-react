import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const customers = handleActions({
    ['customers/dashboard'](state) {
        return { ...state, loading: true, };
    },
    ['customers/get/success'](state, action) {
        return { ...state, list: action.payload, loading: false, };
    },
    ['customers/get/failed'](state, action) {
        return { ...state, err: action.err, loading: false, };
    },
    ['customers/delete'](state, action) {
        const id = action.payload;
        const newList = state.list.filter(todo => todo.id !== id);
        return { ...state, list: newList, };
    },
    ['customers/create'](state, action) {
        const text = action.payload;
        const newTodo = { text, };
        return { ...state, list: [newTodo, ...state.list], };
    },
    ['customers/toggleComplete'](state, action) {
        const id = action.payload;
        const newList = state.list.map(todo => {
            if (id === todo.id) {
                return { ...todo, isComplete: !todo.isComplete };
            } else {
                return todo;
            }
        });
        return { ...state, list: newList, };
    },
    ['customers/toggleCompleteAll'](state, action) {
        const isComplete = action.payload;
        const newList = state.list.map(todo => ({ ...todo, isComplete }));
        return { ...state, list: newList, };
    },
}, {
    list: [],
    loading: false,
});

export default customers;
