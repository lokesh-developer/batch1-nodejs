const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Here you would typically:
        // 1. Validate the email and password
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // 2. Check if user exists in your database
        // This is a mock user - replace with your database logic
        const mockUser = {
            email: 'test@example.com',
            // This is a hashed version of "password123"
            hashedPassword: '$2b$10$Gf0teuMGbDo5ChzcpbEXg.9ci.SFZsrslj/TvcRSwqqeYB9Mmd28e'
        };

        if (email !== mockUser.email) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // 3. Compare password
        const isPasswordValid = await bcrypt.compare(password, mockUser.hashedPassword);
        
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // 4. Send success response
        res.json({
            message: 'Login successful',
            user: { email: mockUser.email }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    login
};
