// test-users.ts
import { User } from '../models/user';

async function testUsers() {
  try {
    // Try to find one of the seeded users
    const user = await User.findOne({ where: { username: 'JollyGuru' }});
    console.log('Found user:', !!user);
    
    if (user) {
      // Test password validation
      const testPassword = 'password';
      const isValid = await user.validatePassword(testPassword);
      console.log('Password validation test:', isValid);
    }
  } catch (error) {
    console.error('Test error:', error);
  }
}

testUsers();