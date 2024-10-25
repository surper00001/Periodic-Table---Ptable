// src/api/materials.ts  
import axios from 'axios';  
  
// 假设API响应是一个包含材料列表的对象  
interface MaterialsResponse {  
  // 这里应该根据您的实际API响应来定义接口  
  materials: any[]; // 假设我们不知道具体结构，先使用any[]  
}  
  
// 封装获取材料列表的API  
export const getMaterials = async (): Promise<MaterialsResponse['materials']> => {  
  try {  
    const response = await axios.get<MaterialsResponse>('/materials'); // 指定响应数据的类型  
    return response.data.materials; // 假设响应体中有一个materials数组  
  } catch (error) {  
    console.error('Error fetching materials:', error);  
    throw error; // 重新抛出错误，以便在调用处可以处理它  
  }  
};