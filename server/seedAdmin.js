import Admin from './models/Admin.model.js'
import bcrypt from 'bcrypt'

const seedAdmin = async() => {
    try {
        const password = 'admin123'
        const hashedPassword = await bcrypt.hash(password, 10)
        const adminCred = {
            username: "admin1",
            password: hashedPassword,
        }
        const existingAdmin = await Admin.findOne({username: adminCred.username})
        if(existingAdmin){
            console.log('Admin already exists');
            return;
        }
        // Creating Admin
        const admin = new Admin(adminCred);
        await admin.save();
        console.log('Admin seeded successfully');
    } catch (error) {
        console.error('Error seeding admin:', error.message);
    }
}
export default seedAdmin;