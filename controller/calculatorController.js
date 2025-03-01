const calculatorController = {
    calculate: (req, res) => {
        try {
            const { num1, num2, operation } = req.query;
            
            // Convert string inputs to numbers
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);
            
            let result;
            
            switch(operation) {
                case 'add':
                    result = number1 + number2;
                    break;
                case 'subtract':
                    result = number1 - number2;
                    break;
                case 'multiply':
                    result = number1 * number2;
                    break;
                case 'divide':
                    if (number2 === 0) {
                        return res.status(400).json({ error: 'Cannot divide by zero' });
                    }
                    result = number1 / number2;
                    break;
                default:
                    return res.status(400).json({ error: 'Invalid operation. Use add, subtract, multiply, or divide' });
            }
            
            return res.json({
                result: result,
                operation: operation,
                num1: number1,
                num2: number2
            });
        } catch (error) {
            return res.status(500).json({ error: 'Invalid input parameters' });
        }
    }
};

module.exports = calculatorController;

