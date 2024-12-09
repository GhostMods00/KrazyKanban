import bcrypt from 'bcrypt';

const hashPassword = async () => {
    const password = 'admin';
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);
};

hashPassword();