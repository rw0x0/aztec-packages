import { getSampleContractArtifact } from '../test/fixtures.js';
import { contractArtifactFromBuffer, contractArtifactToBuffer } from './contract_artifact.js';

describe('contract_artifact', () => {
  it('serializes and deserializes an instance', async () => {
    const artifact = getSampleContractArtifact();
    const serialized = contractArtifactToBuffer(artifact);
    const deserialized = await contractArtifactFromBuffer(serialized);
    expect(deserialized).toEqual(artifact);
  });
});
