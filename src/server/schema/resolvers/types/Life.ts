import { GraphQLLifeResolvers } from '../definitions';

const LifeGraphQL: GraphQLLifeResolvers = {
    id: root => root._id,
    fullName: root => `${root.firstName} ${root.lastName}`,
    birthday: root => root.birthday,
    title: root => root.title,
    description: root => root.description,
    hobbies: root => root.hobbies,
};

export default LifeGraphQL;
