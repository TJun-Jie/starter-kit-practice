import { ObjectId } from 'mongodb';
import { getDatabaseContext, Life } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (root, input) => {
    const { collections } = await getDatabaseContext();

    const document: Life = {
        _id: new ObjectId(),
        ...input,
    };

    await collections.lives.insertOne(document);

    return document;
};

export default mutation;
