import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import styled from 'styled-components';
import * as api from '../../../api';
import LoadingElement from '../../../components/LoadingElement';
import BasicLayout from '../../../layouts/BasicLayout';

const StyledLifeCard = styled.div`
    border: 1px solid ${props => props.theme.antd['border-color-base']};
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 15px;
    background-color: ${props => props.theme.antd['component-background']};
`;

const LifeField = styled.p`
    margin-bottom: 10px;
`;

const LifePage = () => {
    const { t } = useTranslation(['life']);
    const { lifeid } = useParams<{ lifeid: string }>();
    const { data, loading } = api.useGetOnePersonLifeQuery({ variables: { getLifeId: lifeid } });
    if (loading) {
        return <LoadingElement />;
    }
    const { life } = data;

    return (
        <BasicLayout>
            <StyledLifeCard>
                <h2>{life.title}</h2>
                <LifeField>
                    <strong>{t('life:fullName')}</strong> {life.fullName}
                </LifeField>
                <LifeField>
                    <strong>{t('life:birthday')}</strong> {life.birthday.toString()}
                </LifeField>
                <LifeField>
                    <strong>{t('life:description')}</strong> {life.description}
                </LifeField>
                <LifeField>
                    <strong>{t('life:hobbies')}</strong> {life.hobbies.join(', ')}
                </LifeField>
            </StyledLifeCard>
        </BasicLayout>
    );
};

export default LifePage;
