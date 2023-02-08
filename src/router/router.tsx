import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Header from "../components/Header";
import TodoList from "../pages/TodoList";
import NewTodo from "../pages/NewTodo";

export type StackParamList = {
  TodoList: undefined;
  NewTodo: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function Router() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: Header,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="TodoList"
        component={TodoList}
        options={{ title: "Todo List" }}
      />
      <Stack.Screen
        name="NewTodo"
        component={NewTodo}
        options={{ title: "New Todo" }}
      />
    </Stack.Navigator>
  );
}
