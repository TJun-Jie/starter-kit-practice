import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LifeListDataFragment } from '../../api';

type LifeCardProps = {
    life: LifeListDataFragment;
};

const StyledCard = styled.div`
    border: 1px solid ${props => props.theme.antd['normal-color']};
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
`;

const StyledH3 = styled.h3`
    font-size: 1.2em;
    color: #333;
    margin-bottom: 10px;
`;

const StyledP = styled.p`
    font-size: 1em;
    color: ${props => props.theme.antd['text-color']};
    margin-bottom: 10px;
`;

const StyledUl = styled.ul`
    padding: 0;
    list-style: none;
`;

const StyledLi = styled.li`
    padding: 5px 0;
    border-top: 1px solid ${props => props.theme.antd['normal-color']};
    color: ${props => props.theme.antd['purple-5']};
`;

const StyledPartition = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LifeCard = ({ life }: LifeCardProps) => {
    const { t } = useTranslation(['life']);

    return (
        <StyledCard>
            <StyledPartition>
                <StyledH3>
                    {t('life:fullName')} {life.fullName}
                </StyledH3>
                <Link to={`/life/${life.id}`}>{t('life:findOutMore')}</Link>
            </StyledPartition>
            <StyledP>
                {t('life:description')} {life.description}
            </StyledP>
            <h4>{t('life:hobbies')}</h4>
            <StyledUl>
                {life.hobbies.map(hobby => (
                    <StyledLi key={hobby}>{hobby}</StyledLi>
                ))}
            </StyledUl>
        </StyledCard>
    );
};

export default LifeCard;
