import React from 'react';
import {
  Layers,
  CreditCard,
  Triangle,
  Globe,
  MapPin,
  FileCheck2,
  Laptop,
  Smartphone,
  Sparkles,
  Palette,
  Film,
  Code2,
  Layout,
  FileText,
  Monitor,
  MousePointerClick,
  Compass,
} from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Layers':
      return <Layers className={className} />;
    case 'CreditCard':
      return <CreditCard className={className} />;
    case 'Triangle':
      return <Triangle className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'FileCheck2':
      return <FileCheck2 className={className} />;
    case 'Laptop':
      return <Laptop className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'Film':
      return <Film className={className} />;
    case 'Code2':
      return <Code2 className={className} />;
    case 'Layout':
      return <Layout className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Monitor':
      return <Monitor className={className} />;
    case 'MousePointerClick':
      return <MousePointerClick className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

