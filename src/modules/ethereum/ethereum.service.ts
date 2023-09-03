import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class EthereumService {
    async getBlockTransactions(blockDecNumber: number) {
        const url = `https://api.etherscan.io/api?
        module=proxy&action=eth_getBlockByNumber&tag=0x${blockDecNumber.toString(16)}&boolean=true&apikey=${process.env.APIKEY}`
        
        try {
            const response = await axios.get(url);
            if (response.status !== 200) {
                console.log(`Failed to fetch data from ${url}`)
            };

            return response.data.result.transactions; 

        } catch (e) {
            console.log(e);
        }
    } 

    async getLastBlock(): Promise<number> {
        const url = `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${process.env.APIKEY}`
    
        try {
            const response = await axios.get(url);
            if (response.status !== 200) {
                console.log(`Failed to fetch data from ${url}`)
            };

            return Number(response.data.result.toString(10))

        } catch (e) {
            console.log(e);
        }
    }
}
