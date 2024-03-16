import axios from 'axios';

async function GitHubApi (username: string): Promise<any> {
   try {
       const response = await axios.get(`https://api.github.com/users/${username}`);
       return response.data;
   } catch (error) {
       throw new Error('Failed to fetch user data');
   }
}

export { GitHubApi };
