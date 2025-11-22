// // // __tests__/userController.test.js
// const { getUserById } = require('../controllers/userController');
// const User = require('../models/User'); // Import the actual model
// import jest from 'jest';
// // Mock the Mongoose User model
// jest.mock('../models/User');

// describe('User Controller Unit Tests', () => {
//     let mockReq, mockRes;

//     beforeEach(() => {
//         mockReq = { params: { id: 'someUserId' } };
//         mockRes = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn(),
//         };
//     });

//     it('should return a user if found', async () => {
//         const mockUser = { _id: 'someUserId', name: 'Test User' };
//         User.findById.mockResolvedValue(mockUser); // Mock the findById method

//         await getUserById(mockReq, mockRes);

//         expect(mockRes.status).toHaveBeenCalledWith(200);
//         expect(mockRes.json).toHaveBeenCalledWith(mockUser);
//     });

//     it('should return 404 if user not found', async () => {
//         User.findById.mockResolvedValue(null);

//         await getUserById(mockReq, mockRes);

//         expect(mockRes.status).toHaveBeenCalledWith(404);
//         expect(mockRes.json).toHaveBeenCalledWith({ message: 'User not found' });
//     });

//     it('should return 500 on server error', async () => {
//         const errorMessage = 'Database error';
//         User.findById.mockRejectedValue(new Error(errorMessage));

//         await getUserById(mockReq, mockRes);

//         expect(mockRes.status).toHaveBeenCalledWith(500);
//         expect(mockRes.json).toHaveBeenCalledWith({ message: errorMessage });
//     });
// });