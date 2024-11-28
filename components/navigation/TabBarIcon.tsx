import Ionicons from '@expo/vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

interface TabBarIconProps {
  name: ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: string;
  style?: any; // Or a more specific style type if needed
  accessibilityLabel?: string;
}

export function TabBarIcon({ name, size = 28, color = 'black', style, accessibilityLabel }: TabBarIconProps) {
  return (
    <View style={[{ marginBottom: -3 }, style]}> {/* Wrap in a View for styling */}
      <Ionicons
        name={name}
        size={size}
        color={color}
        style={styles.icon}
        accessible={!!accessibilityLabel} // Make accessible if label is provided
        accessibilityLabel={accessibilityLabel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    // Add any additional default styles here
  },
});
