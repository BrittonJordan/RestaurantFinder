import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer TtokAi_2X4Eyl15QyMRaPlRvyTQjSCBSTgr0v4oSZ__qUwbqKgbIbtZFTgFchE2NSHNmwZa5-2AOtOQ87NuoKBHeXzLnmDv2wN7AvAdUJFsA2gwXDx_0jz-62qnNZHYx'
    }
});