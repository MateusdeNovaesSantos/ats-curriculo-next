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
    }

    //
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

            {/* Seção de objetivo */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>objetivo</Text>
                <Text>{data.cargo || 'Cargo Desejado'}</Text>
            </View>

            {/* Seção de resumo profissional */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>resumo profissional</Text>
                <Text>{data.resumoProfissional || 'Seu resumo profissional...'}</Text>
            </View>

            {/* Seção de Idiomas */}


            {/* Seção de Formação Complementar */}


            {/* Seção de Informações adicionais */}
            

        </Page>
    </Document>
)