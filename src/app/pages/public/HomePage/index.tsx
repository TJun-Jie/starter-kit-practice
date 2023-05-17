import styled from 'styled-components';
import * as api from '../../../api';
import LoadingElement from '../../../components/LoadingElement';
import LifeCard from '../../../components/life/LifeCard';
import BasicLayout from '../../../layouts/BasicLayout';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const HomePage = () => {
    const { data, loading } = api.useGetAllLivesQuery();

    return (
        <BasicLayout>
            {loading ? (
                <LoadingElement />
            ) : (
                <StyledDiv>
                    {data.livesList.map(life => (
                        <div key={life.id}>
                            <LifeCard life={life} />
                        </div>
                    ))}
                </StyledDiv>
            )}
        </BasicLayout>
    );
};

export default HomePage;
