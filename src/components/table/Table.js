import styled from 'styled-components'

export const Table = styled.table`
    width:100%;
    border-collapse: collapse;
    text-align: center;
    @media(max-width:375px){
        font-size:13px;
    }
    `;
export const Tbody = styled.tbody``;

export const Tr = styled.tr`
    &:nth-child(odd):not(.table-header) {
    background: #e5dfdf;
    }
    &:nth-child(even) {
        background: #f0eeee;
    }`;
export const TableHeader = styled.tr`
    height: 37px;
    background: #a2adea;
    `;
export const Th = styled.th``;

export const Td = styled.td`
    padding:10px;
    &:last-child{
        text-align: right;
    }`;