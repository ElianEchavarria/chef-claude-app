import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
    return (
        <section aria-live="polite" className="bg-white shadow-md rounded-xl p-6 leading-8 mx-auto mt-10 border border-gray-200">
            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Chef Claude Recommend:</h2>
            <ReactMarkdown prose prose-green>{props.chefClaudeRecipe}</ReactMarkdown>
        </section>
    );
}