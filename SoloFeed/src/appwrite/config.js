import conf from "../conf/conf";
import { Client, Account, TablesDB,Storage,Query, ID } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
         this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}) {
        try {
            this.databases.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId : conf.appwriteCollectionId,
                rowId : slug,
                data : {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error);
            throw error;
            
        }
    }
    
    async updatePost(slug,{title,content,featuredImage,status}) {
        try {
            return await this.databases.updateRow({
                databaseId : conf.appwriteDatabaseId,
                tableId : conf.appwriteCollectionId,
                rowId : slug,
                data : {
                    title,
                    content,
                    featuredImage,
                    status
                }
            });
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error",error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
             await this.databases.deleteRow({
                databaseId : conf.appwriteDatabaseId,
                tableId : conf.appwriteCollectionId,
                rowId : slug,
            })
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error);
            throw error;
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getRow({
                databaseId : conf.appwriteDatabaseId,
                tableId : conf.appwriteCollectionId,
                rowId : slug,
            })
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error);
            throw error;
            return false;
        }
    }

     async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listRows({
                databaseId : conf.appwriteDatabaseId,
                tableId : conf.appwriteCollectionId,
                queries : queries
            });
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error",error);
            throw error;
            return false;
        }
     }


     async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error);
            throw error;
            return false;
        }
     }

     async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile({
                bucketId : conf.appwriteBucketId,
                fileId : fileId
            })
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error);
            throw error;
            return false;
        }
     }

    getFilePreview(fieldId) {
        return this.bucket.getFilePreview({
            bucketId : conf.appwriteBucketId,
            fileId : fileId
        })
    }
      
}

const service = new Service()
export default service