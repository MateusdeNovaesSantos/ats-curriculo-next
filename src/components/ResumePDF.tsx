import React from "react"
import { Page, Text, View, Document, StyleSheet, Font, Link } from "@react-pdf/renderer"
import { ResumeInputs } from "@/types"

import LatoRegular from '@/assets/fonts/Lato-Regular.ttf';
import LatoBold from '@/assets/fonts/Lato-Bold.ttf';
import LatoItalic from '@/assets/fonts/Lato-Italic.ttf';
import LatoBoldItalic from '@/assets/fonts/Lato-BoldItalic.ttf';

type ResumePDFProps = {
    data: ResumeInputs;
}

Font.register({
  family: 'Lato',
  fonts: [
    { src: LatoRegular },
    { src: LatoBold, fontWeight: 'bold' },
    { src: LatoItalic, fontStyle: 'italic' },
    { src: LatoBoldItalic, fontWeight: 'bold', fontStyle: 'italic' },
  ],
});

const styles = StyleSheet.create({

    // Especificações da Página
    page: {
        fontFamily: 'Lato',
        fontSize: 12,
        paddingTop: 72,
        paddingBottom: 72,
        paddingHorizontal: 72,
        backgroundColor: '#FFFFFF',
        lineHeight: 1.1,
    },

    // Especificações do Cabeçalho
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 1.3,
        textTransform: 'uppercase',
    },

    // Especificações das Seções
    section: {
        marginVertical: 8,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 2,
        paddingBottom: 8,
    },

    // bullet list
    bList: {
        paddingLeft: 10,
    },

    fokus: {
        fontWeight: 'bold',
    }
    
})

export const ResumePDF = ({ data }: ResumePDFProps) => (
    <Document author="Mateus de Novaes Santos" title={`Currículo - ${data.nomeCompleto}`}>
        <Page size="A4" style={styles.page}>

            {/* Cabeçalho com dados dinâmicos */}
            <View style={styles.header}>
                <Text style={styles.name}>{data.nomeCompleto?.toUpperCase() || 'NOME COMPLETO'}</Text>
                <Text>{data.idade ? `${data.idade} anos` : ''}</Text>
                <Text>{data.endereco ? `${data.endereco}` : ''}</Text>
                <Text>{data.celular ? `${data.celular}` : ''}</Text>
                <Link src={data.email}>{data.email ? `${data.email}` : ''}</Link>
                <Link src={data.linkedin}>{data.linkedin ? `${data.linkedin}` : ''}</Link>
            </View>

            {/* Seção de objetivo e resumo profissional */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>objetivo</Text>
                <Text>{data.cargo || 'Cargo Desejado'}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>resumo profissional</Text>
                <Text>{data.resumoProfissional || 'Seu resumo profissional...'}</Text>
            </View>

            {/* Seção formação acadêmica */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>formação acadêmica</Text>
                {data.formacao.map(({ curso, instituicao, conclusao }, idx) => (
                    <Text key={idx} style={styles.bList}>• <Text style={styles.fokus}>{curso}</Text> pela {instituicao} concluído em {conclusao}</Text>
                ))}
            </View>
            

            {/* Seção de experiencia profissional */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>experiência profissional</Text>
                {data.experiencia.map(({ empresa, tamanhoEmpresa, cargo, inicio, fim, descricao }, idx) => (
                    <View key={idx} style={{ paddingVertical: 7}}>
                        <Text style={styles.bList}><Text style={styles.fokus}> - {empresa}</Text> (Empresa de {tamanhoEmpresa} porte)</Text>
                        <Text style={styles.fokus}>{cargo}</Text>
                        <Text>{inicio} até {fim}</Text>
                        {descricao.map((value, idx2)  => (
                            <Text key={idx2} style={styles.bList}>• {value}</Text>
                        ))}
                    </View>
                ))}
            </View>

            {/* Seção de Idiomas */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>idioma</Text>
                {data.idiomas.map(({ idioma, nivel }, idx) => (
                    <Text key={idx}>{idioma} - {nivel}</Text>
                ))}
            </View>

            {/* Seção de Formação Complementar */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>formação complementar</Text>
                {data.formacaoComplementar.map(({ curso, plataforma, cargaHoraria }, idx) => (
                   <Text key={idx} style={styles.bList}>• <Text style={styles.fokus}>{curso}</Text> ({plataforma}) - {cargaHoraria};</Text> 
                ))}
            </View>

            {/* Seção de Informações adicionais */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>informações adicionais</Text>
                {data.informacoesAdicionais.map(({ info }, idx) => (
                    <Text key={idx} style={styles.bList}>• {info};</Text>
                ))}
            </View>

        </Page>
    </Document>
)