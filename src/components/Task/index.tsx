import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { theme } from '../../theme';
import { styles } from './styles';

type Props = {
  content: string;
  completed: boolean;
  handleTaskRemove: () => void;
  toggleTaskCompletion: () => void;
};

export function Task({
  handleTaskRemove,
  content,
  completed,
  toggleTaskCompletion,
}: Props) {
  const [isChecked, setIsChecked] = useState(completed);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredDel, setIsHoveredDel] = useState(false);
  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
    toggleTaskCompletion();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleCheckBox}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}
        activeOpacity={1}
      >
        <Feather
          name={isChecked ? 'check-circle' : 'circle'}
          size={18}
          style={
            isChecked
              ? [styles.checkCircle, isHovered && styles.checkCircleHovered]
              : [styles.circle, isHovered && styles.circleHovered]
          }
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={isChecked ? styles.textDone : styles.textCreated}>
          {content}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleTaskRemove}
        onPressIn={() => setIsHoveredDel(true)}
        onPressOut={() => setIsHoveredDel(false)}
        activeOpacity={1}
        style={[styles.btnDel, isHoveredDel && styles.btnDelHovered]}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={18}
          style={[styles.trash, isHoveredDel && styles.trashHovered]}
        />
      </TouchableOpacity>
    </View>
  );
}
