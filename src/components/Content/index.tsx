import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Status } from '../Status';
import { Task } from '../Task';
import { theme } from '../../theme';
import { styles } from './styles';
import { Empty } from '../Empty';

interface TaskItem {
  name: string;
  completed: boolean;
}

export function Content() {
  const [tasksCreated, setTasksCreated] = useState<TaskItem[]>([]);
  const [tasksContent, setTasksContent] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const numberTasksCreated = tasksCreated.length;
  const numberTasksDone = tasksCreated.filter((task) => task.completed).length;

  function handleTaskAdd() {
    const newTask: TaskItem = { name: tasksContent, completed: false };
    setTasksCreated((prevState) => [...prevState, newTask]);
    setTasksContent('');
  }

  function handleTaskRemove(content: string) {
    Alert.alert('Remover', `Remover a tarefa ${content}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTasksCreated((prevState) =>
            prevState.filter((task) => task.name !== content),
          ),
      },
      { text: 'Não', style: 'cancel' },
    ]);
  }

  function toggleTaskCompletion(taskName: string) {
    setTasksCreated((prevState) =>
      prevState.map((task) =>
        task.name === taskName ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <TextInput
          value={tasksContent}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors.base.gray300}
          style={[
            styles.input,
            {
              borderColor: isFocused
                ? theme.colors.brand.purple_dark
                : theme.colors.base.gray700,
            },
          ]}
          onChangeText={setTasksContent}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity
          style={[styles.btnAdd, isHovered && styles.btnAddHovered]}
          onPress={handleTaskAdd}
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
          activeOpacity={1}
        >
          <AntDesign
            name="pluscircleo"
            size={theme.font_size.lg}
            color={theme.colors.base.gray100}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.statusContent}>
        <Status value="Criadas" content={numberTasksCreated} name="created" />
        <Status value="Concluídas" content={numberTasksDone} name="done" />
      </View>
      <FlatList
        data={tasksCreated}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task
            content={item.name}
            completed={item.completed}
            handleTaskRemove={() => handleTaskRemove(item.name)}
            toggleTaskCompletion={() => toggleTaskCompletion(item.name)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
}
