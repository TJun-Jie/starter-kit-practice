import { getDatabaseContext } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const getLife: GraphQLQueryResolvers['getLife'] = async (_, { id }) => {
    const { collections } = await getDatabaseContext();
    const lifeDocument = await collections.lives.findOne({ _id: id });

    if (!lifeDocument) {
        throw new Error('Life not found');
    }

    return lifeDocument;
};

export default getLife;
