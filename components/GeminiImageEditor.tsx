import React, { useState, useRef } from 'react';
import { editImageWithGemini } from '../services/geminiService';
import { Sparkles, Upload, Loader2, ArrowRight } from 'lucide-react';

export const GeminiImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!selectedImage || !prompt) return;
    setLoading(true);
    try {
      const result = await editImageWithGemini(selectedImage, prompt);
      setGeneratedImage(result);
    } catch (error) {
      alert("Failed to process image. Please check API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-smart-500/30 rounded-2xl p-6 w-full max-w-4xl mx-auto shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="w-6 h-6 text-smart-400" />
        <h3 className="text-xl font-bold text-white">SmartScan AI: Image Analysis & Editing</h3>
      </div>
      
      <p className="text-slate-400 mb-6 text-sm">
        Experience our proprietary "Nano Banana" engine. Upload a medical document or scan and ask the AI to enhance, analyze, or modify it (e.g., "Highlight the fracture", "Make it high contrast for printing").
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-600 hover:border-smart-400 rounded-xl h-64 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-800/50 group"
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Original" className="h-full w-full object-contain rounded-lg" />
            ) : (
              <div className="text-center p-4">
                <Upload className="w-10 h-10 text-slate-500 group-hover:text-smart-300 mx-auto mb-2" />
                <p className="text-slate-400 font-medium">Click to upload scan</p>
                <p className="text-xs text-slate-500 mt-1">PNG, JPG</p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange}
            />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., 'Add a red circle around the anomaly' or 'Enhance contrast'"
              className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-smart-500 transition-all placeholder:text-slate-500"
            />
            <button
              onClick={handleEdit}
              disabled={!selectedImage || !prompt || loading}
              className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all ${
                !selectedImage || !prompt || loading
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-smart-600 to-smart-400 hover:from-smart-500 hover:to-smart-300 text-white shadow-lg shadow-smart-500/20'
              }`}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {loading ? 'Processing...' : 'Generate'}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="border border-slate-700 bg-slate-800/30 rounded-xl h-64 md:h-auto flex flex-col items-center justify-center relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 bg-slate-900/80 z-10 flex flex-col items-center justify-center">
              <Loader2 className="w-12 h-12 text-smart-400 animate-spin mb-3" />
              <p className="text-smart-200 animate-pulse">AI is processing image...</p>
            </div>
          )}
          
          {generatedImage ? (
            <img src={generatedImage} alt="Generated" className="h-full w-full object-contain rounded-lg" />
          ) : (
            <div className="text-center p-6 opacity-40">
                <div className="w-16 h-16 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-slate-400" />
                </div>
              <p className="text-slate-300 font-medium">AI Result will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};