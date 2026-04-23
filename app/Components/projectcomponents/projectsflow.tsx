'use client';

import Image from 'next/image';
import ProjectCard from './projectscard';
import StoryBlock from './storyblock';
import Divider from './divider';
import CredibilityBlock from './credibilityblock';
import ProjectsCTA from './projectscta';
import { projects } from '@/app/data/projects';

export default function ProjectsFlow() {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-32 space-y-24">

      {/* PROJECT 01 — Ekiti Tourism */}
      <ProjectCard project={projects[0]} />

      <Divider />

      {/* STORY 01 — Behind the Ekiti build */}
      <StoryBlock>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-3">
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#e879a0' }}
            >
              Behind the build
            </p>
            <p
              className="text-lg font-medium"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#0c2d48',
              }}
            >
              Leading a team, racing a deadline.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#4a7a95' }}
            >
              For the Ekiti Tourism project, I led a small team of frontend
              developers under a tight government-aligned timeline. We focused on
              performance, accessibility, and a smooth user journey across every
              device — because the people visiting this site would range from
              local tourists to international travellers. We shipped clean,
              scalable, and on time.
            </p>
          </div>

          <div className="flex justify-center">
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                width: 160,
                height: 200,
                background: 'linear-gradient(135deg, #bae6fd, #e0bbff)',
                boxShadow: '0 8px 32px rgba(56,189,248,0.2)',
              }}
            >
              <Image
                src="/Marvelsuit.jfif"
                alt="Marvel"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </div>
        </div>
      </StoryBlock>

      <Divider />

      {/* PROJECT 02 — Curano Dashboard */}
      <ProjectCard project={projects[1]} reverse />

      <Divider />

      {/* STORY 02 — The Curano brief */}
      <StoryBlock>
        <div className="space-y-3 max-w-2xl">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: '#e879a0' }}
          >
            The brief
          </p>
          <p
            className="text-lg font-medium"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#0c2d48',
            }}
          >
            &ldquo;We needed it delivered in under two weeks.&rdquo;
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#4a7a95' }}>
            The client behind Curano reached out with a clear vision and an even
            clearer deadline. We moved fast, prioritised the core experience, cut
            the noise, and shipped a dashboard their team actually enjoys using.
            Speed and quality don&apos;t have to be opposites — this project
            proved it.
          </p>
        </div>
      </StoryBlock>

      <Divider />

      {/* PROJECT 03 — Babs Security */}
      <ProjectCard project={projects[2]} />

      <Divider />

      {/* PROJECT 04 — Trave */}
      <ProjectCard project={projects[3]} reverse />

      <Divider />

      {/* CREDIBILITY MOMENT — Portrait + stats */}
      <CredibilityBlock />

      <Divider />

      {/* CTA */}
      <ProjectsCTA />

    </div>
  );
}