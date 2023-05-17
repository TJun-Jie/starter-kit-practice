import { ObjectId } from 'mongodb';
import { getDatabaseContext } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const getLife: GraphQLQueryResolvers['listLives'] = async _ => {
    const { collections } = await getDatabaseContext();

    // Convert the id from string to ObjectId
    // const _id = new ObjectId(id);

    const lifeDocument = await collections.lives.find().toArray();

    if (!lifeDocument) {
        throw new Error('Life not found');
    }

    return lifeDocument;
};

export default getLife;
