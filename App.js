import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [authResult, setAuthResult] = useState(null);

  const authenticateWithBiometrics = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync();
      setAuthResult(result);
    } catch (error) {
      console.error('Biometric authentication error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Biometric Authentication</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={authenticateWithBiometrics}
      >
        <Text style={styles.buttonText}>Authenticate with Biometrics</Text>
      </TouchableOpacity>
      {authResult && (
        <>
          {authResult.success ? (
            <Text style={styles.successText}>Authentication successful!</Text>
          ) : (
            <Text style={styles.errorText}>Authentication failed: {authResult.error}</Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successText: {
    color: 'green',
    marginTop: 12,
    marginBottom: 12,
  },
  errorText: {
    color: 'red',
    marginTop: 12,
    marginBottom: 12,
  },
});
