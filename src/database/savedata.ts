import { connectToDatabase } from "./seed";

export async function saveFormData(formData: any) {
    const connection = await connectToDatabase();
    try {
      const [result] = await connection.execute(`
        INSERT INTO users (name, image_url, email, password, country)
        VALUES (?, ?, ?, ?, ?)
      `, [formData.name, formData.image_url, formData.email, formData.password, formData.country]);
  
      console.log('Data saved successfully:', result);
    } catch (error) {
      console.error('Error saving data:');
    } finally {
      await connection.end();
    }
  }