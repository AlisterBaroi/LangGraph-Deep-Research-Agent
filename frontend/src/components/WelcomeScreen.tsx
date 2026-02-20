import { InputForm } from "./InputForm";

interface WelcomeScreenProps {
  handleSubmit: (
    submittedInputValue: string,
    effort: string,
    model: string
  ) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  handleSubmit,
  onCancel,
  isLoading,
}) => (
  <div className="h-full flex flex-col items-center justify-center text-center px-4 flex-1 w-full max-w-3xl mx-auto gap-4">
    <div>
      <h3 className="text-4xl md:text-4xl font-semibold text-neutral-100 mb-3">
        LangGraph <span className="text-orange-400">Research Agent</span>
      </h3>
      <p className="text-xl md:text-xl text-neutral-400">
        I search the web to find detailed info for you. Ask me to research on any topic!
      </p>
    </div>
    <div className="w-full mt-4">
      <InputForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        onCancel={onCancel}
        hasHistory={false}
      />
    </div>
    {/* 
    <p className="text-xs text-center text-neutral-500">
        This is a LangGraph Research Agent demo, built by
        <a href="https://github.com/alisterbaroi" target="_blank" rel="noopener noreferrer" className="ml-1 text-orange-400">
          Alister Baroi
        </a>
      </p>
    */}
  </div>
);
